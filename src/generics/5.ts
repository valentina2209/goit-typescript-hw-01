export enum UserRole {
 admin = 'admin',
 editor = 'editor',
 guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record

type UserRoleStatuses = Record<UserRole, string>;

const RoleDescription: UserRoleStatuses = {
 [UserRole.admin]: 'Admin User',
 [UserRole.editor]: 'Editor User',
 [UserRole.guest]: 'Guest User',
};







