function threeSum(arr, target) {
// write your code here
	var len = arr.length;
	var res = arr[0] + arr[1] + arr[2];
	var sum=0;
	var l=0;
	var r=0;
	arr.sort((a,b) => (a-b));
	for(var i=0;i<len-2;i++)
		{
			if(i>0 && arr[i] === arr[i-1]) continue;
			l=i+1;
			r=len-1;
			while(l<r)
				{
					sum=arr[i] + arr[l] + arr[r];
					if(sum<target)
					{
						l++;
					}
					else if(sum > target)
					{
						r--;
					}else {
						return sum;
					}
					if(Math.abs(sum-target) < Math.abs(res - target)) res=sum;
				}
		}
  return res;
}

module.exports = threeSum;
