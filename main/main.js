//Array even
var array=[1,2,3,4,5,6,7,8,9,20,22];count=0;count1=0;

for(i=0;i<array.length;i++)
{
	if(array[i]%2==0)
	{
		document.write(array[i]+"even num"+"<br>");
		count++;
		}

else{
		document.write(array[i]+"odd num"+"<br>");
		count1++;
    }
}
console.log(count);
console.log(count1);