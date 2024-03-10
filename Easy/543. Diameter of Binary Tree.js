/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    // 우리가 최종적으로 반환해야 할 값의 variable
    let diameter = 0;

    // 재귀로 풀어주기
    const dfs = (node) => {
        if (!node) {
            return 0;
        }

        // 왼쪽 풀어주기
        const left = dfs(node.left);

        // 오른쪽 풀어주기
        const right = dfs(node.right);

        // diameter 값 업데이트
        diameter = Math.max(diameter, left + right);

        // 지금 level 반환
        return Math.max(left, right) + 1;
    };

    dfs(root);

    return diameter;
};