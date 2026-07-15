export const prerender = false;

import { sendMail } from '$lib/server/email';

export async function POST({ request }) {
  try {
    const information = await request.json();
    const messageId = await sendMail(information.receivers, information.formData);
    return new Response(messageId, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
} 