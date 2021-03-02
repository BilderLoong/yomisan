class AnkiConnect {
  async getDeckList() {
    this.isConnecting() ? this.#communicateToAnki('deckNames') : undefined;
  }

  async addNote(note) {
    if (!this.isConnecting()) return;
    return this.#communicateToAnki('addNote', { note });
  }

  async getRemoteVersion() {
    if (!this.isConnecting()) return;
    return this.#communicateToAnki('version');
  }

  async isConnecting() {
    try {
      await this.#communicateToAnki('version');
      return true;
    } catch (e) {
      return false;
    }
  }

  async #communicateToAnki(action, params) {
    const response = await fetch('http://127.0.0.1:8765', {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      body: JSON.stringify({ action, params, version: this.version }),
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
}

export default AnkiConnect;
