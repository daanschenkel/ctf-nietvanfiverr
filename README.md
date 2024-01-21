![](assets/images/banner.png)



<img src="assets/images/htb.png" style="margin-left: 20px; zoom: 60%;" align=left />    	<font size="10">Hack the Government</font>

​		21<sup>th</sup> 01 2024

​		Challenge Author(s): Danny (https://daanschenkel.nl)

​		

 



### Description:

The government has done a redesign of their website, but they might not have hired the best developers. You are (fill in a random world leader here) and you want to log in to the government's admin panel to see what they are up to.

### Objective

Gain access to the admin panel by editing the identity cookie

### Difficulty:

`easy`

### Flag:

`CTF{maybe_n0t_th3_0ne_fr0m_f1v3rr}`



# Challenge
1. Read the info and sign in
2. Find the /admin page, realise it needs auth
3. Find the localStorage entry that contains the authentication (possibly from the edit name field)
4. Decode, change and Base64 encode again
5. Go to the admin page and enable the emergency override
6. Take over the world!



# Solver

Read the challenge above
