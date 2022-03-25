async function oprSetup() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth =
    currentDate.getMonth() + 1 < 10
      ? "0" + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1;
  const currentDay =
    currentDate.getDate() < 10
      ? "0" + currentDate.getDate()
      : currentDate.getDate();
  const formattedDate = `${currentYear}-${currentMonth}-${currentDay}`; // 2018-07-22

  return {
    title: "Invoice Generator",
    description:
      "A simple yet powerful invoice generator using Appwrite Functions.",
    payload: [
      {
        key: "id",
        name: "Invoice ID",
        type: "text",
        placeholder: 202200001,
        required: true,
      },
      {
        key: "isPaid",
        name: "Show Paid Badge?",
        type: "checkbox",
      },
      {
        key: "items",
        name: "Items on Invoice",
        type: "array",
        config: [
          {
            key: "productName",
            name: "Product Name",
            type: "text",
            placeholder: "Programming services",
          },
          {
            key: "price",
            name: "Price",
            type: "number",
            placeholder: 50,
          },
          {
            key: "unit",
            name: "Unit",
            type: "text",
            placeholder: "hours",
          },
          {
            key: "amount",
            name: "Amount",
            type: "number",
            placeholder: 20,
          },
          {
            key: "taxPercentage",
            name: "Tax (Percentage)",
            type: "number",
            placeholder: 0,
          },
        ],
      },
      {
        key: "dates",
        name: "Dates",
        type: "object",
        children: [
          {
            key: "billingTimestamp",
            name: "Billing Date",
            type: "date",
            required: true,
            value: formattedDate,
          },
          {
            key: "dueInDays",
            name: "Due in (days)",
            type: "number",
            value: 14,
            required: true,
          },
        ],
      },
      {
        key: "branding",
        name: "Branding",
        type: "object",
        children: [
          {
            key: "color",
            name: "Branding Color",
            type: "color",
            value: "#007fff",
            required: true,
          },
          {
            key: "logoBase64",
            name: "Company Logo",
            type: "file",
          },
          {
            key: "footerNote",
            name: "Note (footer)",
            type: "text",
            placeholder: "Business registered under ...",
          },
        ],
      },
    ],
  };
}
