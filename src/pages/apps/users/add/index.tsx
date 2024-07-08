import AdminRegisterForm from "@/app/components/auth/register-form/admin";
import Layout from "@/app/components/common/layout";

function AddUser() {
    return (
        <main>
            <Layout title="Tambah Pengguna">
                <div className="my-card min-h-standard" >
                    <AdminRegisterForm />
                </div>
            </Layout>
        </main>
    );
}

export default AddUser;