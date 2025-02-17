interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<div className="p-4 bg-red-500">I am nav bar</div>
			{children}
		</div>
	);
};

export default Layout;
