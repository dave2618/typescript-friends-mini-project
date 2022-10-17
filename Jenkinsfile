pipeline
{
    agent {
        docker { image 'mcr.microsoft.com/playwright:v1.27.0-focal'}
    }
    stages {
        stage('Build') {
            steps{
                echo "Building the Code.........."
                sh "npm install"
                sh "npm run build"
            }
        }
        stage('Unit Test') {
            steps {
                echo "Unit Tests"
                sh "npm run test:coverage"
            }
        }
        stage('Playwright') {
            steps {
                echo "Playwright"
                sh "npx playwright test"
            }
        }
    }
}
