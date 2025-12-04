import HeadingSmall from "@/components/admin/ui/heading-small";
import { Button } from "@/components/auth/form/button";
import InputError from "@/components/auth/form/input-error";
import Label from "@/components/auth/form/label";
import PasswordInput from "@/components/auth/form/password-input";
import AdminLayout from "@/layouts/admin/AdminLayout";
import SettingsLayout from "@/layouts/admin/SettingsLayout";
import { Head, useForm } from "@inertiajs/react";
import { JSX } from "preact/jsx-runtime";
import { toast } from "sonner";

export default function Password() {
    const form = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = async (
        e: JSX.TargetedEvent<HTMLFormElement, Event>,
    ) => {
        e.preventDefault();

        form.put("/settings/password", {
            onSuccess: () => {
                toast("Password updated successfully");
                form.reset();
            },
            onError: () => {
                toast.error("Failed to update password");
            },
        });
    };

    return (
        <AdminLayout title="Password settings">
            <Head title="Изменение пароля" />
            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Update password"
                        description="Ensure your account is using a long, random password to stay secure"
                    />

                    <form onSubmit={updatePassword} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="current_password">
                                Current password
                            </Label>

                            <PasswordInput
                                id="current_password"
                                value={form.data.current_password}
                                onInput={(e) =>
                                    form.setData(
                                        "current_password",
                                        e.currentTarget.value,
                                    )
                                }
                                class="mt-1 block w-full"
                                autoComplete="current-password"
                                placeholder="Current password"
                            />

                            <InputError
                                message={form.errors.current_password}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">New password</Label>

                            <PasswordInput
                                id="password"
                                value={form.data.password}
                                onInput={(e) =>
                                    form.setData(
                                        "password",
                                        e.currentTarget.value,
                                    )
                                }
                                autoComplete="new-password"
                                placeholder="New password"
                            />
                            <InputError message={form.errors.password} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password_confirmation">
                                Confirm password
                            </Label>
                            <PasswordInput
                                id="password_confirmation"
                                value={form.data.password_confirmation}
                                onInput={(e) =>
                                    form.setData(
                                        "password_confirmation",
                                        e.currentTarget.value,
                                    )
                                }
                                autoComplete="new-password"
                                placeholder="Confirm password"
                            />
                            <InputError
                                message={form.errors.password_confirmation}
                            />
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={form.processing}>
                                Save password
                            </Button>

                            {form.recentlySuccessful && (
                                <p className="text-sm text-neutral-600">
                                    Saved
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </SettingsLayout>
        </AdminLayout>
    );
}
