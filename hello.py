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
