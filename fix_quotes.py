import re

# 读取文件
with open('src/config/contentData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 替换中文引号为转义的英文引号
# 在JSON字符串值内的中文引号需要转义
content = re.sub(r'(?<="[^"]*)"([^"]*)"(?=[^"]*")', r'\"\1\"', content)
content = re.sub(r'(?<="[^"]*)"([^"]*)"(?=[^"]*")', r'\"\1\"', content)

# 多次运行以处理嵌套的引号
for i in range(5):
    content = re.sub(r'(?<="[^"]*)"([^"]*)"(?=[^"]*")', r'\"\1\"', content)
    content = re.sub(r'(?<="[^"]*)"([^"]*)"(?=[^"]*")', r'\"\1\"', content)

# 写回文件
with open('src/config/contentData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("修复完成")
