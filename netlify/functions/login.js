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
        const { password } = JSON.parse(event.body);
        
        // 验证密码（这里写死密码，实际项目建议从环境变量读取）
        const correctPassword = 'ruiyate8868';
        
        if (password === correctPassword) {
            return {
                statusCode: 200,
                body: JSON.stringify({ 
                    success: true,
                    message: 'Login successful'
                })
            };
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({ 
                    success: false,
                    message: '密码错误，请重试'
                })
            };
        }
        
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                success: false,
                message: 'Internal Server Error'
            })
        };
    }
};
