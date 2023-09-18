import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"],
  dangerouslyAllowBrowser:true
});
// make dangeroulsyAllowBrowser :true  so that OPEN AI can  help to make API calls without any error from browser

export default openai