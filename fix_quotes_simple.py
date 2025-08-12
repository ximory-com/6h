# 读取文件
with open('src/config/contentData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 简单替换所有中文引号为转义的英文引号
content = content.replace('"', '\\"')
content = content.replace('"', '\\"')

# 写回文件
with open('src/config/contentData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("修复完成")
