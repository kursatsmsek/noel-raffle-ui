export const completeNoelRaffle = async (lang, data) => {
  return await fetch(`${process.env.NEXT_PUBLIC_SERVICE_URL}/noel/raffle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
    body: JSON.stringify(data),
  });
};

export const completeGiftRaffle = async (lang, data) => {
  return await fetch(`${process.env.NEXT_PUBLIC_SERVICE_URL}/gift/raffle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
    body: JSON.stringify(data),
  });
};

export const getStats = async (lang, data) => {
  return await fetch(`${process.env.NEXT_PUBLIC_SERVICE_URL}/stats/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });
};
