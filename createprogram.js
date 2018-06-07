function createProgram(gl,vertexShaderSource,fragmentShaderSource){
    //创建顶点着色器对象，这里的参数表示的创建的类型是顶点着色器，它是空的对象
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    //创建片元着色器，空对象
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    //挂接GLSL源代码，就是OpenGl着色语言
    gl.shaderSource(vertexShader,vertexShaderSource);
    gl.shaderSource(fragmentShader,fragmentShaderSource);
    //完成着色器（shader）的编译。 此时 WebGLShader 仍不是可用的形式，他需要被添加到一个 WebGLProgram里.
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    //创建和初始化一个 WebGLProgram 对象， 这个对象由两个编译过后的 WebGLShader 组成 - 顶点着色器和片段着色器
    var program = gl.createProgram();
    //往 WebGLProgram 添加一个片段或者顶点着色器
    gl.attachShader(program,vertexShader);
    gl.attachShader(program,fragmentShader);
    //链接一个给定的WebGLProgram 到已附着的顶点着色器和片段着色器
    gl.linkProgram(program);
    //将定义好的WebGLProgram 对象添加到当前的渲染状态中
    gl.useProgram(program);
    //调试代码，报错打印 片元着色器 fragmentShader 错误细节
    console.log(gl.getShaderInfoLog(fragmentShader));
    return program;
}

