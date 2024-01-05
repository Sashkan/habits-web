import { UserButton } from '@clerk/nextjs';

/**
 * WebAuth: description
 */
export default function WebAuth() {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
