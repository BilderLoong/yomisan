let connecting = isConnected();

export async function addNote(note) {
  if (!connecting) return;
  return await communicateToAnki('addNote', { note });
}

export async function isConnected() {
  try {
    await communicateToAnki('version');
    return true;
  } catch (e) {
    return false;
  }
}

async function communicateToAnki(action, params, version) {
  const response = await fetch('http://127.0.0.1:8765', {
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
    body: JSON.stringify({ action, params, version }),
    headers: { 'Content-Type': 'application/json' },
  });

  const result = await response.json();
  const error = result.error;
  if (error) {
    throw new Error(
      `Error happen during connecting to AnkiConnect. The error info: ${error}`
    );
  }
  return result;
}
