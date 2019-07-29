def replaceBlank(self, string, length):
  if string == None:
    return 0

  spaceCount = 0

  for char in string:
    if char == ' ':
      spaceCount += 1
  
  newLen = length + spaceCount * 2
  index = newLen - 1
  for i in range(length - 1, -1, -1): # 逆序遍历
    if string[i] == ' ':
        string[index] = '0'
        string[index - 1] = '2'
        string[index - 2] = '%'
        index -= 3
    else:
         string[index] = string[i]
         index -= 1
  return L
  
