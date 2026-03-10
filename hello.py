list=[10,45,67,8,9,7.6,"a","b"]
list1=[];
list2=[];
list3=[];
for i in list:
    if type(i)==int:
        list1.append(i);
    elif type(i)==str:
        list2.append(i)
    else:
        list3.append(i)
print("integer values:",list1);
print("string value:",list2);
print("float value:",list3);
def greet():
    print("welcome to gfg")
def sum(*number):
     result=0;
     for num in number:
      result+=num;
     return num;
     
print(sum(10,20,30))
