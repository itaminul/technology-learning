import type { Metadata } from "next";
interface FrontendLayoutProps {
    children: React.ReactNode;
}
const AdminLayout = ({ children }: FrontendLayoutProps) => {
    return (
        <div>
            <header>Admin Panel Header</header>
            <main>{children}</main>
            <footer>Admin Panel Footer</footer>
        </div>
    );
};

export default AdminLayout;