import { useAuthStore } from '@/store/useAuthStore';
const token = useAuthStore.getState().token;

export const updateProduct = async(product:any) => {

    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-account-session-token': token || ''
            },
            body: JSON.stringify(product)
        });
        
        if (!res.ok) throw new Error('Failed to Update ');
        const json = await res.json();
        return json.data;

    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const bulkUploadProducts = async(file:File,vendor_code:string) => {

    try {
        const formData = new FormData();
            formData.append('file', file);
            formData.append('vendor_code', vendor_code);

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/bulk-upload`, {
                method: 'POST',
                 headers: {
                    'x-account-session-token': token || ''
                },
                body: formData,
            });

            if (!res.ok) throw new Error('Failed to upload file');
            return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}