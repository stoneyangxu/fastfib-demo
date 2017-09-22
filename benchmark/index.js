const assert = require('assert')
const recurse = require('../lib/recurse')
const tail = require('../lib/tail')
const iter = require('../lib/iter')
const suite = new (require('benchmark')).Suite // 创建测试套件

suite
    .add('recurse', () => { // 添加一个测试，计算20个数字
        recurse(20)
    })
    .add('tail', () => {
        tail(20)
    })
    .add('iter', () => {
        iter(20)
    })
    .on('complete', function() {
        console.log('result: ')
        this.forEach((result) => { // 输出测试结果
            console.log(result.name, result.count, result.times.elapsed)
        })

        assert.equal( // 断言递归的方式是正确的
            this.filter('fastest').map('name'),
            'iter',
            'expect recurse to be the fastest'
        )
    })
    .run()