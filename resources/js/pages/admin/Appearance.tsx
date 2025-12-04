import AppearanceTabs from '@/components/admin/ui/appearance-tabs';
import HeadingSmall from '@/components/admin/ui/heading-small';
import AdminLayout from '@/layouts/admin/AdminLayout';
import SettingsLayout from '@/layouts/admin/SettingsLayout';
import { Head } from '@inertiajs/react';

export default function Appearance() {
    return (
        <AdminLayout title="Appearance settings">
            <Head title="Изменение темы" />
            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Appearance settings" description="Update your account's appearance settings" />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </AdminLayout>
    );
}
