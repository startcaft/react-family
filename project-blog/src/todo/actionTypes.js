// 定义 todo 模块所要用到的 action 动作\

/**
 * 添加备忘录的 action
 */
export const ADD_TODO = 'Add_Todo';

/**
 * 查询备忘录的 action 
 */
export const SEARCH = 'Search';

/**
 * 将 新建状态 转换成 正在进行状态 的 action 定义
 */
export const CHANGE_TODO_TO_DOING = 'Change_Todo_To_Doing';
export const CHANGE_DOING_TO_DONE = 'Change_Doing_To_Done';
export const CHANGE_DONE_TO_DOING = 'Change_Done_To_Doing';
export const CHANGE_DOING_TO_TODO = 'Change_Doing_To_Todo';

/**
 * 删除 备忘录的 action 定义
 */
export const DELETE_TODO = 'Delete_Todo';

