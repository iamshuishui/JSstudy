console.log('text');
function hello(word, name)
{
  console.log(word, name);
};

hello('nihao', 'xiaoyi');

function sayhello1(name)
{
  console.log('Hello,',name);
};

function sayhi1(name)
{
  console.log('Hi,',name);
};

function saynihao1(name)
{
  console.log('你好，',name);
};

saynihao1('小一');
sayhello1('小一');
sayhi1('小一');

function sayhello(word, name)
{
  console.log(word, name);
};

function sayhi(word, name)
{
  console.log(word, name);
};

function saynihao(word, name)
{
  console.log(word, name);
};

saynihao('你好,', '小一');
sayhello('Hello,', '小一');
sayhi('Hi,', '小一');

for(var i=2;i<100;i++)
{
  var flag=true;
  for(var j=2;j<i;j++)
  {
    if(i%j==0)
    {
      flag=false;
    };
  };

  if(flag){
    console.log(i);
  };
};

function sushu(num)//功能：判断是否为素数
{
  for(var i=2;i<num;i++)
  {
    if(num%i==0)
    {
      return false;
    // }else{
    //   return true;
    };
  };
  return true;
};
//循环：执行100以内所有的自然数
for(var j=2;j<100;j++)
{
  //如果j的赋值执行sushu函数为真，打印该数
  if(sushu(j))
  {
    console.log(j);
  };
};

//数组
var arr=[];
for (var j=2;j<100;j++)
{
  if(sushu(j))
  {
    arr.push(j);
  };
};
console.log(arr);


//for in循环
// for(i in arr)
//功能：判断num是否是水仙花数
function shuixianhua(num)
{
  //水仙花数的概念是：一个n位数，数的每一位的n次幂相加等于概数
  //把num的每一位分割出来，转化为字符串后用split分割
  var arr=(num+'').split('');
  console.log(arr);
  //数组中的每一位数进行运算
  var sum=0;
  for(index in arr)//数组中每一位的循环：第一位、第二位、第三位
  {
    //var sum=0; //和的最初为0
    //每一位与自己相乘n次
    var a=1;
    for(var i=0;i<arr.length;i++)
    {

      a=a*arr[index];

      // console.log(a);
    }
    sum=sum+a;
    console.log(sum);
  }
  if(sum!=num)
    return false;

  return true;
}

console.log(shuixianhua(153))
