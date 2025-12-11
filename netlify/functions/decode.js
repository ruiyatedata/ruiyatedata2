exports.handler = async function(event, context) {
    // 只允许POST请求
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }
    
    try {
        // 解析请求数据
        const { data } = JSON.parse(event.body);
        
        // 验证输入参数
        if (data === undefined || data === '' || isNaN(data)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid input' })
            };
        }
        
        // 你的密码计算公式 - 完全在后台运行，前端看不到
        let result = parseFloat(data);
        
        // 执行7次循环计算
        for (let i = 0; i < 7; i++) {
            result = (result * 823 + 778899) % 31234;
        }
        
        // 返回结果
        return {
            statusCode: 200,
            body: JSON.stringify({
                output: Math.round(result)
            })
        };
        
    } catch (error) {
        // 错误处理
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
