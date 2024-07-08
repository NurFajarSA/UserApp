import Layout from "@/app/components/common/layout";
import AdminRegisterForm from "@/app/components/register-form/admin";

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