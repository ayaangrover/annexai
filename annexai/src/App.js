import axios from "axios";
import { useState, useEffect } from "react";

const chatGPTApiUrl = "https://api.openai.com/v1/chat/";

const getChatGPTResponse = async () => {
  try {
    const response = await axios.get(chatGPTApiUrl, {
      headers: {
        // Add your API key here
        Authorization: "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",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
axios.get('https://example.com')
  .then(response => {
    // do something with the response
  })
  .catch(error => {
    console.log("124");
  });
const useChatGPT = () => {
  const [chatGPTResponse, setChatGPTResponse] = useState(null);

  useEffect(() => {
    getChatGPTResponse().then((response) => {
      setChatGPTResponse(response);
    });
  }, []);

  return chatGPTResponse;
};

export default useChatGPT;