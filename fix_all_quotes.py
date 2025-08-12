import re

# 读取文件
with open('src/config/contentData.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 定义需要替换的中文引号模式
patterns = [
    (r'"([^"]*)"', r'\\"\1\\"'),  # 中文双引号
    (r'"([^"]*)"', r'\\"\1\\"'),  # 另一种中文双引号
]

# 但是要保护JSON结构中的引号，只替换字符串值内的引号
# 使用更精确的方法：只在字符串值内替换
lines = content.split('\n')
fixed_lines = []

for line in lines:
    # 如果这行包含字符串值（以": "开头的内容）
    if '": "' in line:
        # 找到字符串值的开始和结束
        parts = line.split('": "', 1)
        if len(parts) == 2:
            key_part = parts[0] + '": "'
            value_part = parts[1]
            
            # 在值部分替换中文引号
            value_part = value_part.replace('"', '\\"')
            value_part = value_part.replace('"', '\\"')
            
            line = key_part + value_part
    
    fixed_lines.append(line)

# 重新组合内容
content = '\n'.join(fixed_lines)

# 写回文件
with open('src/config/contentData.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("修复完成")
