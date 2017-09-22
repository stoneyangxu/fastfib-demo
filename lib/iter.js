function iter(n) {
    let current = 0
    let next = 1
    let swap = 0

    for (let i = 0; i < n; i++) {
        swap = current
        current = next
        next = swap + next
    }

    return current
}

module.exports = iter