const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_API_KEY); // Use the environment variable for API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

exports.generateShayari = async (weather) => {
  try {
    const prompt = `Create a romantic and motivating morning shayari with a mix of English and Hindi, including emojis, that mentions current weather like "${weather}".`;

    const result = await model.generateContent(prompt);
    return result.response.text(); // Return the generated text
  } catch (error) {
    console.error('Error generating Shayari:', error.message);
    throw new Error('Could not generate Shayari');
  }
};
