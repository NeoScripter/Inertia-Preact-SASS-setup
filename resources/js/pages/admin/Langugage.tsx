import AppearanceTabs from "@/components/admin/ui/appearance-tabs";
import HeadingSmall from "@/components/admin/ui/heading-small";
import LangugageTabs from "@/components/admin/ui/langugage-tabs";
import AdminLayout from "@/layouts/admin/AdminLayout";
import SettingsLayout from "@/layouts/admin/SettingsLayout";
import { Head } from "@inertiajs/react";

export default function Langugage() {
    return (
        <AdminLayout title="Appearance settings">
            <Head title="Изменение темы" />
            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Appearance settings"
                        description="Update your account's appearance settings"
                    />
                    <LangugageTabs />
                </div>
            </SettingsLayout>
        </AdminLayout>
    );
}
