<?php
/**
 * Created by PhpStorm.
 * User: Tioncico
 * Date: 2020/1/2 0002
 * Time: 9:10
 */

$text = file_get_contents('./test.md');

//先分行截取
$arr = explode(PHP_EOL, $text);
$dataList = [];

$levelI = [
    0=>0,
    1=>0,
    2=>0,
    3=>0,
];
foreach ($arr as $str) {
    $level = getLevel($str);
    $name = getName($str);
    $url = getUrl($str);
    $data = [
        'info' => [
            'name' => $name,
            'url' => $url
        ],
        'list' => []
    ];
    if ($level==0){
        $dataList[$levelI[0]] = $data;
        $levelI[0]++;
        $levelI[1]=0;
        $levelI[2]=0;
        $levelI[3]=0;
    }elseif($level==1){
        $dataList[$levelI[0]-1]['list'][$levelI[1]] = $data;
        $levelI[1]++;
        $levelI[2]=0;
        $levelI[3]=0;
    }elseif($level==2){
        $dataList[$levelI[0]-1]['list'][$levelI[1]-1]['list'][$levelI[2]] = $data;
        $levelI[2]++;
        $levelI[3]=0;
    }elseif($level==3){
        $dataList[$levelI[0]-1]['list'][$levelI[1]-1]['list'][$levelI[2]-1]['list'][$levelI[3]] = $data;
        $levelI[3]++;
    }

}
//var_dump($dataList);
$data = getValue($dataList);
echo  json_encode($data);
//var_dump(getValue($dataList));
function getValue($dataList){
    $valueList = [];
    foreach ($dataList as $value){
        if (empty($value['list'])){
            $data = [$value['info']['url'],$value['info']['name']];
        }else{
            $data = [
                'title'=>$value['info']['name'],
                'collapsable'=>true,
                'sidebarDepth'=>1,
                'children'=>getValue($value['list']),
            ];
            if ($value['info']['url']){
                array_unshift($data['children'],[
                    $value['info']['url'],$value['info']['name']
                ]);
            }

        }
        $valueList[] = $data;
    }
    return $valueList;
}


//解析-字符串的位置,判断level
function getLevel($str)
{
    $level = strpos($str, '-') / 4;
    return $level;
}

//解析名字
function getName($str)
{
    if (strpos($str, '[') !== false) {
        $nameStart = strpos($str, '[');
        $nameEnd = strpos($str, ']');
        $name = substr($str, $nameStart + 1, $nameEnd - $nameStart - 1);
    } else {
        $nameStart = strpos($str, '-');
        $nameStr = substr($str, $nameStart + 1);
        $name = trim($nameStr);
    }
    return $name;
}

function getUrl($str)
{
    if (strpos($str, '(') !== false) {
        $urlStart = strpos($str, '(');
        $urlEnd = strpos($str, ')');
        $url = substr($str, $urlStart + 1, $urlEnd - $urlStart - 1);
    } else {
        $url = null;
    }
    return $url;
}