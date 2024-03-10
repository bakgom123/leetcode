function isValid(s: string): boolean {
    // 닫는 괄호 짝꿍을 저장할 객체
    const parentheses: { [key: string]: string } = { ")": "(", "]": "[", "}": "{" };

    // 열린 괄호를 담을 스택
    const stack: string[] = [];

    for (const c of s) {
        // 열린 괄호를 발견했을 때
        if (!(c in parentheses)) {
            // 스택에 추가
            stack.push(c);
            continue;
        }

        // 닫는 괄호를 발견했을 때, 짝꿍이 없거나 짝이 맞지 않으면 false
        if (!stack.length || stack[stack.length - 1] !== parentheses[c]) {
            return false;
        }

        // 짝꿍을 찾았으니 스택에서 제거
        stack.pop();
    }

    // 스택이 비어있으면 true, 괄호가 남아있으면 false
    return !stack.length;
}