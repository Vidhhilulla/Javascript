function callBack1(callBack2Param)
{
    console.log('callBack1 called')
    callBack2Param()
}

function callBack2()
{
    console.log(" CallBack2 called")
}

function mainFunction(callBack1Param,callBack2Param)
{
    console.log("Performing main function task")
    callBack1Param(callBack2Param)
}

mainFunction(callBack1,callBack2)




// function demoFunction(demoFunc)
// {
//     console.log("Hello of Demo Funcrion")
//     demoFunc()
// }

