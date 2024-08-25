import { IconSettings } from '~/components/icons';
import { Link } from '~/components/ui/link';

export function Home() {
  return (
    <div class="m-auto flex max-w-96 flex-col items-center duration-300 animate-in fade-in-0 zoom-in-105">
      <Link href="/list" class="flex gap-2" variant={{ variant: 'outline' }}>
        <span>Edit Roulette List</span>
        <IconSettings />
      </Link>
    </div>
  );
}
