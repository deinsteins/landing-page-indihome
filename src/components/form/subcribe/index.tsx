import React from "react";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  alternativePhoneNumber: string;
  address: string;
  package: string;
}

function SubscribeForm({
  selectedPackage,
  onCloseModal, // Receive the onCloseModal function as a prop
}: {
  selectedPackage: string;
  onCloseModal: () => void; // Define the function type
}) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Track the button click event
    gtag("event", "button_click", {
      event_category: "CTA",
      event_label: "Form Berlangganan",
    });

    // Track the conversion event
    gtag("event", "conversion", {
      send_to: "AW-11363180473/pE2wCI64mOkYELm_saoq", // Replace with your actual Google Ads conversion ID
      value: 1,
    });
    const whatsappMessage = `Saya Ingin Pasang Indihome.
Nama Lengkap: ${data.name}
Email: ${data.email}
Nomor Handphone: ${data.phoneNumber}
Nomor Handphone Alternatif: ${data.alternativePhoneNumber}
Alamat Lengkap Pemasangan: ${data.address}
Paket Indihome yang dipilih: ${selectedPackage}
        `;

    // Construct the WhatsApp link
    const whatsappLink = `https://wa.me/6285211477581?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Redirect to the WhatsApp link
    window.open(whatsappLink, "_blank");
    onCloseModal();
  };

  return (
    <form
      className="text-black p-4 w-full sm:w-[32rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1 mb-4 text-red-500">
        <label className="text-black">Nama Lengkap</label>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name Harus diisi" }} // Separate validation rule
          render={({ field }) => (
            <input {...field} className="border rounded p-1 text-black" />
          )}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-1 mb-4 text-red-500">
        <label className="text-black">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email Harus diisi" }}
          render={({ field }) => (
            <input
              type="email"
              {...field}
              className="border rounded p-1 text-black"
            />
          )}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-1 mb-4 text-red-500">
        <label className="text-black">Nomor Handphone</label>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: "Phone Number Harus diisi" }}
          render={({ field }) => (
            <input {...field} className="border rounded p-1 text-black" />
          )}
        />
        {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
      </div>

      <div className="flex flex-col gap-1 mb-4 text-red-500">
        <label className="text-black">Nomor Handphone Alternatif</label>
        <Controller
          name="alternativePhoneNumber"
          control={control}
          render={({ field }) => (
            <input {...field} className="border rounded p-1 text-black" />
          )}
        />
      </div>

      <div className="flex flex-col gap-1 mb-4 text-red-500">
        <label className="text-black">Alamat Lengkap Pemasangan</label>
        <Controller
          name="address"
          control={control}
          rules={{ required: "Address Harus diisi" }}
          render={({ field }) => (
            <textarea {...field} className="border rounded p-1 text-black" />
          )}
        />
        {errors.address && <span>{errors.address.message}</span>}
      </div>

      <div className="flex flex-col gap-1 mb-4">
        <label>Paket Indihome yang dipilih</label>
        <Controller
          name="package"
          control={control}
          render={({ field }) => (
            <input
              disabled
              value={selectedPackage}
              className="border rounded p-1"
            />
          )}
        />
      </div>

      <button
        className="px-6 py-2 bg-[#EA0A2A] text-white rounded-lg w-full hover:bg-[#ea0a2cda] "
        type="submit"
      >
        Kirim
      </button>
    </form>
  );
}

export default SubscribeForm;
