"use client";

// TEMPORARY: The original landing page has been moved to page.tsx.bak.
// This redirect is a placeholder until the landing page is ready to be restored.

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
	const router = useRouter();

	useEffect(() => {
		router.replace("/login");
	}, [router]);

	return null;
}
