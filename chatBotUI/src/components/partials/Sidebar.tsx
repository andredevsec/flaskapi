import { HelpCircle, Settings, Menu } from 'lucide-react';
import DBLogo from '../../assets/Dragon_Ball_Z_logo.svg';

export function Sidebar() {
  return (
    <aside className="bg-secondary min-h-screen p-4 flex flex-col justify-between lg:w-64 w-20">
      <div>
        <img src={DBLogo} alt="Assistente Dragon Ball Z" className="w-full mx-auto mt-3" />
        <div className="mb-6 flex justify-center lg:justify-start">
          <Menu className="w-8 h-8 cursor-pointer lg:hidden" />
        </div>
        {/* Adicionar mais itens aqui se necessário */}
      </div>
      <div className="space-y-4">
        <SidebarItem icon={<HelpCircle className="w-6 h-6" />} label="Ajuda" />
        <SidebarItem icon={<Settings className="w-6 h-6" />} label="Configurações" />
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-500 p-2 rounded-lg transition-colors text-white">
      <div className="flex-shrink-0">{icon}</div>
      <p className="hidden lg:block">{label}</p>
    </div>
  );
}
