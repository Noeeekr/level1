import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="bg-slate-50 flex h-screen items-center w-screen flex-col md:flex-row md:overflow-hidden">
      <div className=" bg-slate-200 w-full h-14 md:h-screen md:w-44">
        <SideNav/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

