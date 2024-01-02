const chatMessages = document.getElementById('chat-messages');
    const userInputText = document.getElementById('user-input-text');

    function sendMessage() {
        const userMessage = userInputText.value;

        if (userMessage.trim() === '') return;

        appendMessage('user', userMessage);
        // Call a function to process the user's message and generate a response
        processUserMessage(userMessage);
        userInputText.value = '';
    }

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `${sender}: ${message}`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function processUserMessage(userMessage) {
    // Convert the user's message to lowercase for case-insensitive matching
    const lowerCaseMessage = userMessage.toLowerCase();

    // Define possible user queries and their corresponding responses
    const responses = {
        'hello': 'Hi there! How can I help you?',
        'services': 'SciAstra offers a wide range of scientific services including data analysis, research consulting, and more.',
        'products': 'We provide cutting-edge scientific products to support your research needs.',
        'contact': 'You can contact us at info@sciastra.com or call us at +1-123-456-7890.',
        'what is the scientific method': 'The scientific method is a process for investigating the natural world. It involves making observations, forming hypotheses, testing hypotheses, and drawing conclusions.',
        'what is the difference between a theory and a law': 'A theory is a well-substantiated explanation of some aspect of the natural world. A law is a statement that describes a natural phenomenon that always occurs in the same way.',
       'what is evolution': 'Evolution is the process by which populations of living organisms change over generations. Evolution is driven by natural selection, which is the differential survival and reproduction of individuals with favorable traits.',
       'what is climate change': 'Climate change is long-term shifts in temperatures and weather patterns. Climate change is caused by human activities, such as the burning of fossil fuels, which release greenhouse gases into the atmosphere.',
     'what is biodiversity': 'Biodiversity is the variety of life on Earth. Biodiversity includes all of the different species of plants, animals, and microorganisms, as well as the genetic diversity within each species.',
     'what is conservation': 'Conservation is the protection of natural resources and the environment. Conservation is important because it helps to ensure that future generations will have access to the resources they need to survive and thrive.',
     'what is renewable energy': 'Renewable energy is energy that comes from sources that are naturally replenished, such as the sun, wind, and water. Renewable energy sources are becoming increasingly important as we look to reduce our reliance on fossil fuels.',
      'what is sustainable development': 'Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs. Sustainable development includes economic, social, and environmental factors.',
      'what is environmentalism': 'Environmentalism is a movement that aims to protect the natural world and promote sustainable development. Environmentalists work to address issues such as climate change, pollution, and deforestation.',
      'what is the role of science in society': 'Science plays an important role in society by helping us to understand the natural world and solve problems. Science is used to develop new technologies, improve healthcare, and protect the environment.',
      'what are some of the challenges facing science today': 'Some of the challenges facing science today include climate change, antibiotic resistance, and the rise of misinformation. Scientists are working to address these challenges and develop solutions that will benefit all of humanity.',
       'what are some of the opportunities for science in the future': 'Some of the opportunities for science in the future include developing new technologies to address climate change, curing diseases, and exploring the universe. Scientists are excited about the future and the potential of their work to make the world a better place.',
      'how can i get involved in science': 'There are many ways to get involved in science. You can volunteer at a local science museum, participate in a science fair, or start your own science project. You can also support science by donating to a science organization or voting for candidates who support science funding.',
      'what are some of the careers in science': 'There are many different careers in science. You can become a scientist, engineer, doctor, or teacher. You can also work in science journalism, public policy, or business.',
      'what is the future of science': 'The future of science is bright. Scientists are making new discoveries every day, and they are using their knowledge to develop new technologies and solve problems. Science is essential for solving the challenges facing humanity and creating a better future for all.',
        // Add more queries and responses as needed
    };

    // Check if the user's message matches any predefined queries
    for (const query in responses) {
        if (lowerCaseMessage.includes(query)) {
            const response = responses[query];
            appendMessage('bot', response);
            return;
        }
    }

    // If no predefined query matches, provide a default response
    const defaultResponse = "I'm sorry, I didn't understand that. Please ask something else.";
    appendMessage('bot', defaultResponse);
}

    // Initial greeting
    appendMessage('bot', 'Welcome to SciAstra! How can I assist you today?');