//13강
//문제 1
type User = {
    name: string;
    email: string;
    password: string;
}

function updateUserForm(input: User, updateInput: Partial<User>): User {
    return { ...input, ...updateInput }
}

const currentUser = { name: "Alice", email: "alice@example.com", password: "1234" };
const updatedForm = { email: "new-email@example.com" };

console.log(updateUserForm(currentUser, updatedForm));


//문제 2
type UserProfile = {
    id: number,
    name: string,
    email: string,
    address: string,
}

function getProfileSummary(input: UserProfile): Pick<UserProfile, "id" | "name"> {
    return {id: input.id, name: input.name}
}

const userProfile = { id: 1, name: "Alice", email: "alice@example.com", address: "123 Main St" };
console.log(getProfileSummary(userProfile));


//문제 3
type UserType = {
    name: string;
    email: string;
    password: string;
    role: string;
}

function filterSensitiveInfo(input: UserType): Omit<UserType, "password"> {
    const { password, ...safeInfo } = input // 객체 디스트럭처링을 사용하여 password를 분리하고 버림, 나머지 필드들을 safeInfo로 모음
    return {...safeInfo}
}

const userInfo = { name: "Alice", email: "alice@example.com", password: "1234", role: "admin" };
console.log(filterSensitiveInfo(userInfo));


//문제 4
type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

function createTeamMember(member: Partial<TeamMember>): TeamMember {
    return {
        id: member.id!, //! 이 값은 절대 undefined 아님
        name: member.name || "",
        email: member.email || "",
        role: member.role || "developer",
        isActive: member.isActive ?? true,
    }
} 

function filterTeamMembers(members: TeamMember[], condition: Pick<TeamMember, "role" | "isActive">): TeamMember[] {
    return members.filter((member) => member.role === condition.role && member.isActive === condition.isActive)
}

function removeSensitiveInfo(members: TeamMember[]): Omit<TeamMember, "email">[] {
    return members.map(( {email, ...removeInfo }) => removeInfo)
}

// 테스트 코드
const members: TeamMember[] = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "developer", isActive: true },
  { id: 2, name: "Bob", email: "bob@example.com", role: "designer", isActive: false },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "manager", isActive: true },
];

const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);

const activeDesigners = filterTeamMembers(members, { role: "designer", isActive: true });
console.log(activeDesigners);

const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
