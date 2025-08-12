import re

# 读取文件
with open('src/config/contentData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 使用正则表达式找到所有字符串值并替换其中的中文引号
def replace_quotes_in_string(match):
    string_content = match.group(1)
    # 替换字符串内容中的中文引号
    string_content = string_content.replace('"', '\\"')
    string_content = string_content.replace('"', '\\"')
    return '"' + string_content + '"'

# 匹配JSON字符串值（不包括键）
pattern = r'"([^"]*(?:["""][^"]*)*)"'
content = re.sub(pattern, replace_quotes_in_string, content)

# 写回文件
with open('src/config/contentData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("修复完成")
