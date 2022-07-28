package br.proj.vidaimobiliaria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.proj.vidaimobiliaria.dto.EmailDTO;
import br.proj.vidaimobiliaria.email.Email;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/email")
public class EmailController {
	@Autowired
    private Email mailer;

    @PostMapping
    public void enviarEmail(@RequestBody EmailDTO emailDto){
        mailer.enviarEmail("vidaimobiliariasmtp@gmail.com", emailDto.getDestinatario(), emailDto.getAssunto(), emailDto.getMensagem());
    }
}

