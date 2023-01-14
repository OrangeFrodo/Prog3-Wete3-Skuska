package sk.umb.skuska.lmikusova.cddb.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sk.umb.skuska.lmikusova.cddb.domain.Cd;
import sk.umb.skuska.lmikusova.cddb.domain.CdDto;
import sk.umb.skuska.lmikusova.cddb.service.CdService;

@RestController
public class CdController {
    public CdController(CdService cdService) {
        this.cdService = cdService;
    }

    private CdService cdService;

    @PostMapping("/api/add-cd")
    public Cd addCd(@RequestBody CdDto requestDto) {
        return cdService.addCd(requestDto);
    }

}
