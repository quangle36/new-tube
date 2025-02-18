'use client';

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenu,
} from '@/components/ui/sidebar';
import { useAuth, useClerk } from '@clerk/nextjs';
import {
	FlameIcon,
	HistoryIcon,
	HomeIcon,
	ListVideoIcon,
	PlaySquareIcon,
	ThumbsUpIcon,
} from 'lucide-react';
import Link from 'next/link';
const items = [
	{
		title: 'History',
		url: '/playlists/history',
		icon: HistoryIcon,
		auth: true,
	},
	{
		title: 'Liked videos',
		url: '/playlists/liked',
		icon: ThumbsUpIcon,
		auth: true,
	},
	{
		title: 'All playlists',
		url: '/playlists',
		icon: ListVideoIcon,
		auth: true,
	},
];

const PersonalSection = () => {
	const { userId, isSignedIn } = useAuth();
	const clerk = useClerk();
	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								tooltip={item.title}
								asChild
								isActive={false} //TODO: Change to look at current pathname
								onClick={() => {}} //TODO: Do something onclick
							>
								<Link href={item.url} className="flex items-center gap-4">
									<item.icon />
									<span className="text-sm">{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};

export default PersonalSection;
