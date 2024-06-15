import ErrorButton from "@/components/ErrorButton";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <>
      <h1>layout.tsx (login)</h1>
      <ErrorButton />
      {children}
    </>
  );
}
