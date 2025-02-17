interface PageProps {
	params: Promise<{ videoId: string }>;
}
const Page = async ({ params }: PageProps) => {
	const { videoId } = await params;
	console.log('server component');
	return <div>Video ID: {videoId}</div>;
};

export default Page;
