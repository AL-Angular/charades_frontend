require 'selenium-webdriver'

driver = Selenium::WebDriver.for :chrome

driver.navigate.to 'http://localhost:4200/h'

driver.find_element(:id,'openSignIn1').click
driver.find_element(:id,'signInUserModel1').send_keys('testowaniemch@gmail.com')
driver.find_element(:id,'password1').send_keys('test123')
driver.find_element(:id,'hide1').click
driver.find_element(:id,'hide1').click
driver.find_element(:id,'signIn1').click
sleep(3)

driver.find_element(:id,'toHistoryAndStatistics1').click
sleep(3)
driver.find_element(:id,'toProfile1').click
sleep(3)